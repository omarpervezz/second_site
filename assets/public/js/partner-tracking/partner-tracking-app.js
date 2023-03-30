/*
* !!!!!!!!!!!!!!!!!!!!!
* WARNING
* !!!!!!!!!!!!!!!!!!!!!
*
* This minified version of script is copied to html.tpl.php in body
* For changing - make changes here, then minify add paste to BODY
* This file doesn't included to scripts
*
*
*
*
* This scripts uses for partners tracking.
* If user comes with GET params @partner_id or @agnt - this parameters is written in cookies.
* Also pixel with duplicated logic is called. For double-check.
*/

const cookieDomain = document.location.host;

(function () {
  const $_GET = {};
  function setCookie(name, value, options) {
    options = options || {};
    let { expires } = options;
    if (typeof expires === 'number' && expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    for (const propName in options) {
      updatedCookie += `; ${propName}`;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }
    document.cookie = updatedCookie;
  }
  let path = document.location.search;
  if (path.indexOf('?') === 0) {
    path = path.substr(1);
  } else {
    path = '';
  }
  if (path.length) {
    const pairs = path.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      const pair = pairs[i].split('=');
      $_GET[pair[0]] = pair[1];
    }
  }
  /**
   * Instead param partner_id can be custom hash param for non understandable..
   * If custom param exists - put it to partner_id
   * @author Sergey Kudryashov
   */

  const partnerParamsArr = ['partner_id', 'HJDSauj87sDAbjb', 'form'];
  for (i = 0; i <= partnerParamsArr.length; i++) {
    if ($_GET[partnerParamsArr[i]]) {
      $_GET.partner_id = $_GET[partnerParamsArr[i]];
    }
  }
  if ($_GET.utm_blocka !== undefined) {
    const now = new Date();
    let time = now.getTime();
    time += 3600 * 24 * 90 * 1000;
    now.setTime(time);
    setCookie('utm_blocka', $_GET.utm_blocka, { expires: now.toUTCString(), path: '/', domain: cookieDomain });
  }
  if ($_GET.utm_entry_product !== undefined) {
    const currentTime = new Date();
    let timeOfUtm = currentTime.getTime();
    timeOfUtm += 3600 * 24 * 90 * 1000;
    currentTime.setTime(timeOfUtm);
    setCookie('utm_entry_product', $_GET.utm_entry_product, { expires: currentTime.toUTCString(), path: '/', domain: cookieDomain });
  }
  const data = [];
  if ($_GET.partner_id !== undefined) {
    data.push(`partner_id=${$_GET.partner_id}`);
  }
  if ($_GET.partner_source !== undefined) {
    data.push(`partner_source=${$_GET.partner_source}`);
  }
  if ($_GET.partner_campaign_id !== undefined) {
    data.push(`partner_campaign_id=${$_GET.partner_campaign_id}`);
  }
  if ($_GET.agnt !== undefined) {
    data.push(`agnt=${$_GET.agnt}`);
  }
  if ($_GET.agnt) {
    const agntExpires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 90); // now+90 days for affiliates
    setCookie('aff[id]', $_GET.agnt, { expires: agntExpires.toUTCString(), path: '/', domain: cookieDomain });
    setCookie('aff[date]', Math.floor(new Date().getTime() / 1000), { expires: agntExpires.toUTCString(), path: '/', domain: cookieDomain });
    setCookie('agent[agent_id]', '', { expires: -1, path: '/', domain: cookieDomain });
    setCookie('agent[agent_source]', '', { expires: -1, path: '/', domain: cookieDomain });
    setCookie('agent[agent_campaign_id]', '', { expires: -1, path: '/', domain: cookieDomain });
    setCookie('agent[visit_date]', '', { expires: -1, path: '/', domain: cookieDomain });
  } else if ($_GET.partner_id) {
    var ibExpires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30); // now+30 days for introducers
    setCookie('agent[agent_id]', $_GET.partner_id, {
      expires: ibExpires.toUTCString(), path: '/', domain: cookieDomain, secure: true, SameSite: 'None',
    });
    setCookie('agent[visit_date]', Math.floor(new Date().getTime() / 1000), {
      expires: ibExpires.toUTCString(), path: '/', domain: cookieDomain, secure: true, SameSite: 'None',
    });
    setCookie('aff[id]', '', { expires: -1, path: '/', domain: cookieDomain });
    setCookie('aff[date]', '', { expires: -1, path: '/', domain: cookieDomain });
  }
  if ($_GET.partner_source) {
    setCookie('agent[agent_source]', ($_GET.partner_source || ''), {
      expires: ibExpires.toUTCString(), path: '/', domain: cookieDomain, secure: true, SameSite: 'None',
    });
  }
  if ($_GET.partner_campaign_id) {
    setCookie('agent[agent_campaign_id]', ($_GET.partner_campaign_id || ''), {
      expires: ibExpires.toUTCString(), path: '/', domain: cookieDomain, secure: true, SameSite: 'None',
    });
  }
  if (window.REFERER || document.referrer !== '') {
    const r = window.REFERER || document.referrer;
    data.push(`referer=${encodeURIComponent(r)}`);
  } else {
    data.push('referer=');
  }
  if (data.length) {
    const img = new Image();
    img.src = `/track/?${data.join('&')}`;
    img.className += 'hide';
    img.onload = function () {
      document.body.appendChild(img);
    };
    // $('<img />').attr('src', src).appendTo('body').hide();
  }
  if ($_GET.raf !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    setCookie('raf', $_GET.raf, { expires: date.toGMTString(), path: '/', domain: cookieDomain });
  }
}());
/* FILE NEED TO BE COPIED TO HTML.TPL THIS IS JUST TEMPLATE */
