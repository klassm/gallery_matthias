export interface ImageData {
  [albumId: string]: Image[]
}

export interface Image {
  compressed_path: string;
  path: string;
  width: string;
  height: string;
}