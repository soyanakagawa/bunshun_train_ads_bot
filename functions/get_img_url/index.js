console.log('starting function')
const request = require('request')
const cheerio = require('cheerio')

const req_url = 'http://shukan.bunshun.jp'
const xpath = '#magazine-backnumber .relation-inner .img a img'
//const xpath = '[xml\\:id="magazine-backnumber"]'
const options = {
  url: req_url,
  method: 'GET'
}
let img_url = ''

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  request(options, function (error, response, body) {
    const $ = cheerio.load(body)
    img_path = $(xpath).attr('src')
    img_url = req_url + img_path
    console.log(img_url)
    cb(null, { img_url: img_url } )
  })
}
