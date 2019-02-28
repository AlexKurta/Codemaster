export function getDataForCurrentUrl(arr, url) {
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url !== url) {
        if (arr[i].sections) {
          const res = getDataForCurrentUrl(arr[i].sections, url)
          if (res) return res
        }
      } else {
        return arr[i].sections
      }
    }
  }
}
