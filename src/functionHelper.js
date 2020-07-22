export function urlEncoded(obj) {
  var str = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      )
    }
  }
  return str.join("&");
}
