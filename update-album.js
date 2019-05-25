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
  const launchOptions = process.env.PUPPETEER_CHROME_BIN ? {
    executablePath: process.env.PUPPETEER_CHROME_BIN
  }: undefined;
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
      const {width: placeholderWidth, height: placeholderHeight} = calculateWidthAndHeightFor(width, height, 30);
      return {
        compressed_path: urlFor(url, previewWidth, previewHeight),
        compressed: true,
        placeholder_path: urlFor(url, placeholderWidth, placeholderHeight),
        path: urlFor(url, fullWidth, fullHeight),
        width: fullWidth,
        height: fullHeight
      };
    });
}

const config = [
  {name: 'Macro', url: 'https://photos.app.goo.gl/EiaCXB9gmGcz1GeG7'},
  {name: 'Landscape', url: 'https://photos.app.goo.gl/aooocpwV7U16zATF8'},
];

(async () => {
  const result = {};
  for (const item of config) {
    result[item.name] = await providePhotosInAlbumWithUrl(item.url);
  }
  fs.writeFileSync('config.json', JSON.stringify(result));
})();
