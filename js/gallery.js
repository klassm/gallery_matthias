/**
 * Config file. Contains all of the options for laying out the photos, as well
 * as the albums and photo metadata.
 */
class Config {
  constructor(config, opts) {
    this.data = config;
    this.maxHeight = opts.maxHeight || 400;
    this.spacing = opts.spacing || 10;
    this.shuffle = opts.shuffle || false;
    this.columns = opts.columns || 3;
  };

  photos(album) {
    return this.data[album];
  }

  latestPhotosOfEachAlbum() {
    const latest = Object.keys(this.data).map(album => {
      let photos = this.data[album];
      return photos.slice(photos.length - 3, photos.length);
    })
      .reduce((previous, cur) => [...previous, ...cur], []);
    return shuffle(latest);
  }
}

/**
 * Abstract class for rendering a layout.
 */
class Renderer {
  constructor(domId) {
    this._rootElem = document.getElementById(domId);
    const bounds = this._rootElem.getBoundingClientRect();
    this._currentWidth = bounds.right - bounds.left;
  }

  render(config) {
  }

  rootElem() {
    return this._rootElem;
  }

  createAlbumSection(id) {
    const sectionElem = document.createElement('section');
    sectionElem.id = id;
    return sectionElem;
  }

  createImageElement(photo, width, height, spacing) {
    const image = new Image();

    image.style.width = width;
    image.style.height = height;
    image.style.marginBottom = spacing;
    image.onload = onImageLoad;
    image.setAttribute("data-action", "zoom");

    if (photo.isCompressed()) {
      // Lazy loading + a compressed image
      image.setAttribute("data-original", photo.originalSrc());
      image.setAttribute("data-src", photo.compresedSrc());
      image.src = photo.placeholderSrc();
      image.classList.add('lazyload');
    } else {
      // Original
      image.src = photo.src();
    }

    return image;
  }
}

/**
 * Renders the photos in rows
 */
class HorizontalRenderer extends Renderer {
  render(config, albumId, photos) {
    const section = this.createSection(config, albumId, photos);
    this.rootElem().appendChild(section);
  }

  /**
   * Creates an album section
   */
  createSection(config, section, photos) {
    const photosToShow = config.shuffle ? shuffle(photos) : photos;
    const sectionElem = this.createAlbumSection(section);

    while (photosToShow.length > 0) {
      let maxWidth = config.spacing * -1;
      const rowPhotos = [];

      while (true) {
        const photo = photosToShow.pop();
        maxWidth += photo.width(config.maxHeight) + config.spacing;
        rowPhotos.push(photo);
        if (maxWidth - config.spacing > this._currentWidth) {
          sectionElem.appendChild(this.createRow(config, section, rowPhotos));
          break;
        }

        if (photosToShow.length === 0) {
          sectionElem.appendChild(this.createRow(config, section, rowPhotos, true));
          break;
        }
      }
    }

    return sectionElem;
  }

  /**
   * Creates a row of photos with fixed height
   */
  createRow(config, section, photos, isIncomplete = false) {
    let i;
    const rowElem = document.createElement('div');
    rowElem.className = 'sectionrow';
    rowElem.style.marginBottom = px(config.spacing);

    // Calculate height of element
    const targetWidth = this._currentWidth - (photos.length - 1) * config.spacing;
    let sumWidth = 0;
    for (i in photos) {
      sumWidth += photos[i].width(config.maxHeight);
    }
    const aspectRatio = sumWidth / parseFloat(targetWidth);
    let finalHeight = config.maxHeight / aspectRatio;
    if (isIncomplete) {
      finalHeight = config.maxHeight;
      // If it barely reaches the max height, it looks like an error. So let's
      // just add a ton of padding by reducing the height of the row.
      if (sumWidth > targetWidth * 9 / 10) {
        finalHeight = config.maxHeight * 0.9;
      }
    }

    for (i = 0; i < photos.length; i++) {
      const photo = photos[i];
      const image = this.createImageElement(photo,
        px(photo.width(finalHeight)),
        px(finalHeight),
        px(0));

      if (i !== 0) {
        image.style.marginLeft = px(config.spacing);
      }

      rowElem.appendChild(image);
    }
    return rowElem;
  }
}


/**
 * Wrapper for a photo
 */
class Photo {
  constructor(p) {
    this.path = p.path;
    this._width = p.width;
    this._height = p.height;
    this._is_compressed = p.compressed;
    this.placeholder_path = p.placeholder_path;
    this.compressed_path = p.compressed_path;
    this.filename = p.filename;

    this.aspectRatio = this._width / parseFloat(this._height);
  };

  src() {
    return this.path;
  }

  isCompressed() {
    return this._is_compressed;
  }

  originalSrc() {
    return this.path;
  }

  compresedSrc() {
    return this.compressed_path;
  }

  placeholderSrc() {
    return this.placeholder_path;
  }

  width(height) {
    return height * this.aspectRatio;
  }

  height(width) {
    return width / this.aspectRatio;
  }
}

//
// Helpers
//

/**
 * http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
  const toShuffle = [...a];
  for (let i = toShuffle.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [toShuffle[i - 1], toShuffle[j]] = [toShuffle[j], toShuffle[i - 1]];
  }
  return toShuffle;
}

/**
 * Event listener. Enables photos to transition to full opacity.
 */
function onImageLoad() {
  this.classList.add('img-loaded');
}

/**
 * Utility class to avoid type coercion
 */
function px(size) {
  return size + 'px';
}
