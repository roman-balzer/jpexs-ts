# jpexs-ts

Extract resources from SWF using open source jpexs jar library

## Dependency

- `NodeJS` v6.\*
- `Java` v8.\*

## Installation

    npm install jpexs-ts --save

## Usage

Works only export export tool

Example:

```ts
import { decompile } from 'jpexs-ts'

decompile(
  {
    file: 'path/to/swf/file',
    output: 'path/to/output/dir',
    items: [ 'script', ... ],
    formats: [ 'script:as', ... ],
    selectClass: ['com.++']
  },
  {
    onClose: () => console.log('Finished '),
    onError: err => console.error("Error:", err),
    onStdout: data => console.log("Data:", data),
  }
);
```

## selectClass
  To be able to export only specific class, the selectClass option can be used.
  - `com.MyClass` - export only com.MyClass
  - `com.+` (all classes)
  - `com.MyClass,com.MyClass2` (multiple classes)
  - `com.++` (all classes and subclasses)

## Items

- `script`
  Scripts (Default format: ActionScript source)
- `image`
  Images (Default format: PNG/JPEG)
- `shape`
  Shapes (Default format: SVG)
- `morphshape`
  MorphShapes (Default format: SVG)
- `movie`
  Movies (Default format: FLV without sound)
- `font`
  Fonts (Default format: TTF)
- `frame`
  Frames (Default format: PNG)
- `sprite`
  Sprites (Default format: PNG)
- `button`
  Buttons (Default format: PNG)
- `sound`
  Sounds (Default format: MP3/WAV/FLV only sound)
- `binaryData`
  Binary data (Default format: Raw data)
- `text`
  Texts (Default format: Plain text)
- `fla`
  Everything to FLA compressed format
- `all`
  Every resource (but not FLA)

## Formats

- script
  - `script:as`
    ActionScript source
  - `script:hex`
    ActionScript Hex only
  - `script:pcode`
    ActionScript P-code
  - `script:pcodehex`
    ActionScript P-code with hex
- shape
  - `shape:svg`
    SVG format for Shapes
  - `shape:bmp`
    BMP format for Shapes
  - `shape:png`
    PNG format for Shapes
  - `shape:canvas`
    HTML5 Canvas format for Shapes
- morph shape
  - `morphshape:svg`
    SVG format for MorphShapes
  - `morphshape:canvas`
    HTML5 Canvas format for MorphShapes
- frame
  - `frame:bmp`
    BMP format for Frames
  - `frame:png`
    PNG format for Frames
  - `frame:gif`
    GIF format for Frames
  - `frame:pdf`
    PDF format for Frames
  - `frame:avi`
    AVI format for Frames
  - `frame:svg`
    SVG format for Frames
  - `frame:canvas`
    HTML5 Canvas format for Frames
- sprite
  - `sprite:png`
    PNG format for Sprites
  - `sprite:gif`
    GIF format for Sprites
  - `sprite:avi`
    AVI format for Sprites
  - `sprite:svg`
    SVG format for Sprites
  - `sprite:pdf`
    PDF format for Sprites
  - `sprite:bmp`
    BMP format for Sprites
  - `sprite:canvas`
    HTML5 Canvas format for Sprites
- button
  - `button:png`
    PNG format for Buttons
  - `button:svg`
    SVG format for Buttons
  - `button:bmp`
    BMP format for Buttons
- image
  - `image:bmp`
    BMP format for Images
  - `image:png`
    PNG format for Images
  - `image:jpeg`
    JPEG format for Images
  - `image:png_gif_jpeg`
    PNG/GIF/JPEG format for Images
- text
  - `text:svg`
    SVG format for Texts
  - `text:plain`
    Plain text format for Texts
  - `text:formatted`
    Formatted text format for Texts
- font
  - `font:ttf`
    TTF format for Fonts
  - `font:woff`
    WOFF format for Fonts
- sound
  - `sound.flv`
    FLV format for Sounds
  - `sound.wav`
    WAV format for Sounds
  - `sound.mp3_wav_flv`
    MP3/WAV/FLV format for Sounds
