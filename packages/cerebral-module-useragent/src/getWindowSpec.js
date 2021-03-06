export default function getWindowSpec () {
  return {
    orientation: getOrientation(),
    height: getHeight(),
    width: getWidth()
  }
}

function getOrientation () {
  const width = getWidth()
  const height = getHeight()

  if (height < width) {
    return 'landscape'
  }

  if (height > width) {
    return 'portrait'
  }

  return 'square'
}

function getWidth () {
  return window.innerWidth
}

function getHeight () {
  return window.innerHeight
}
