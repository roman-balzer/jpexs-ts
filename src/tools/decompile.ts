'use strict'

const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn

export type Items =
  | 'all'
  | 'fla'
  | 'text'
  | 'script'
  | 'image'
  | 'shape'
  | 'movie'
  | 'font'
  | 'frame'
  | 'sprite'
  | 'button'
  | 'sound'
  | 'binaryData'
  | 'morphshape'

type Font_sub = 'ttf' | 'woff'
type Font = `font:${Font_sub}`
type Text_sub = 'svg' | 'plain' | 'formatted'
type Text = `text:${Text_sub}`
type Sound_sub = 'flv' | 'wav' | 'mp3_wav_flv'
type Sound = `sound:${Sound_sub}`
type Image_sub = 'bmp' | 'png' | 'jpeg' | 'png_gif_jpeg'
type Image = `image:${Image_sub}`
type Frame_sub = 'bmp' | 'png' | 'svg' | 'gif' | 'avi' | 'pdf' | 'canvas'
type Frame = `frame:${Frame_sub}`
type Sprite_sub = 'bmp' | 'png' | 'svg' | 'gif' | 'avi' | 'pdf' | 'canvas'
type Sprite = `sprite:${Sprite_sub}`
type Button_sub = 'bmp' | 'png' | 'svg'
type Button = `button:${Button_sub}`
type Shape_sub = 'bmp' | 'png' | 'svg' | 'canvas'
type Shape = `shape:${Shape_sub}`
type Script_sub = 'as' | 'hex' | 'pcode' | 'pcodehex'
type Script = `script:${Script_sub}`
type Morphshape_sub = 'svg' | 'canvas'
type Morphshape = `morphshape:${Morphshape_sub}`
type Format = Font | Text | Sound | Image | Frame | Sprite | Button | Shape | Script | Morphshape

interface Options {
  file: string
  output: string
  formats?: Format[]
  items?: Items[]
  selectClass?: string[]
}

interface Callbacks {
  onError: (err: string) => void
  onClose: () => void
  onStdout: (data: string) => void
}

const buildParameters = (options: Options) => {
  const params = ['-jar', path.resolve(__dirname, '../../bin/ffdec.jar')]

  if (options.selectClass && options.selectClass.length) {
    params.push('-selectclass')
    params.push(options.selectClass.join(','))
  }

  if (options.formats && options.formats.length) {
    params.push('-format')
    params.push(options.formats.join(','))
  }

  if (options.items && options.items.length) {
    params.push('-export')
    params.push(options.items.join(','))
  }

  params.push(options.output)
  params.push(options.file)

  console.log('🚀TCL ~ file: decompile.ts ~ line 82 ~ buildParameters ~ params', params)
  return params
}

export const decompile = (options: Options, callbacks: Callbacks) => {
  if (!options) {
    callbacks.onError('No options provided')
    return
  }
  if (!fs.existsSync(options.file)) {
    callbacks.onError('File not found')
    return
  }

  const javaProccess = spawn('java', buildParameters(options))

  javaProccess.stdout.on('data', (data: Buffer) => callbacks.onStdout(data.toString('utf8')))
  javaProccess.stderr.on('data', (data: Buffer) => callbacks.onError(data.toString('utf8')))
  javaProccess.on('close', () => callbacks.onClose())
}
