#!/usr/bin/env node
const puppeteer = require('puppeteer');
const process = require('process');
const fs = require('fs');

function urlFor(baseUrl, width, height) {
  return `${baseUrl}=w${width}-h${height}-no`;
}

function calculateSizeMultiplyFactor(size, targetSize) {
  return targetSize / size;
}

function calculateWidthAndHeightFor(width, height, targetSize) {
  const widthNumber = parseInt(width, 10);
  const heightNumber = parseInt(height, 10);
  const factor = calculateSizeMultiplyFactor(Math.max(widthNumber, heightNumber), targetSize);
  return {
    width: Math.floor(widthNumber * factor),
    height: Math.floor(heightNumber * factor)
  }
}

const imageExtractionRegex = /\["(?<url>https:\/\/lh3.google[^"]+)",(?<width>\d+),(?<height>\d+)/g;

function extractImagesFrom(text) {
  const results = {};
  let match;
  while((match = imageExtractionRegex.exec(text)) != null) {
    results[match.groups.url] = match.groups;
  }
  return Object.values(results);
}

async function providePhotosInAlbumWithUrl(url) {
  console.log('downloading from ' + url);

  const launchOptions = process.env.PUPPETEER_CHROME_BIN ? {
    executablePath: process.env.PUPPETEER_CHROME_BIN
  } : undefined;
  const browser = await puppeteer.launch(launchOptions);

  const page = await browser.newPage();
  let resolve;
  const imagesFoundPromise = new Promise(resolveFct => {
    resolve = resolveFct;
  });

  await page.on('response', async response => {
    if (response.url().startsWith("https://photos.google.com/share/")) {
      console.log("found required response incl. images");
      const text = await response.text();
      resolve(extractImagesFrom(text));
    }
  });

  console.log("launched");

  await page.goto(url);
  console.log("opened " + url);

  const foundImages = await imagesFoundPromise;
  await browser.close();

  console.log(`found ${foundImages.length} images`);
  return foundImages
    .map(({url, width, height}) => {
      const {width: fullWidth, height: fullHeight} = calculateWidthAndHeightFor(width, height, 1920);
      const {width: previewWidth, height: previewHeight} = calculateWidthAndHeightFor(width, height, 1000);
      return {
        thumbnailPath: urlFor(url, previewWidth, previewHeight),
        path: urlFor(url, fullWidth, fullHeight),
        width: fullWidth,
        height: fullHeight
      };
    });
}

const config = [
  {name: 'Macro', url: 'https://photos.app.goo.gl/EiaCXB9gmGcz1GeG7'},
  {name: 'Landscape', url: 'https://photos.app.goo.gl/aooocpwV7U16zATF8'},
  {name: 'Animals', url: 'https://photos.app.goo.gl/EVTayVR3MFa7HCHs8'},
  {name: 'Plants', url: 'https://photos.app.goo.gl/8DnStkr9YPGnVxGz6'},
  {name: 'City', url: 'https://photos.app.goo.gl/ZYjV8FoY2catmS5Q7'},
];

(async () => {
  const result = {};
  for (const item of config) {
    result[item.name] = await providePhotosInAlbumWithUrl(item.url);
  }
  fs.writeFileSync('../site/public/config.json', JSON.stringify(result));
  fs.writeFileSync('../docs/config.json', JSON.stringify(result));
})();
