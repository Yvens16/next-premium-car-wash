import * as Parser from 'ua-parser-js'

export default function isMobile(req) {
  let userAgent;

  if (req) {//if ssg
    userAgent = Parser(req.headers['user-agent'] || '')
  } else { //check only on the client side
    userAgent = new Parser().getResult();
  }
  console.log('userAgent', userAgent);
  return userAgent?.device?.type === 'mobile';
}