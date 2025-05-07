export interface ExtendedDocument extends Document {
  mozFullScreenElement?: Element
  msFullscreenElement?: Element
  webkitFullscreenElement?: Element
  mozCancelFullScreen?: () => Promise<void>
  msExitFullscreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
}

export interface ExtendedHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => Promise<void>
  webkitRequestFullscreen?: () => Promise<void>
  msRequestFullscreen?: () => Promise<void>
}
