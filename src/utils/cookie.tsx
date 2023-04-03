export const getCookie = (name: string): any => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, "\\$1") + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

type TCookieProps = {
  expires?: number | string;
  path?: string | number | boolean;
};

export function setCookie(
  name: string,
  value: string | number | boolean | null,
  props: any
) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d.toUTCString();
  }
  if (value) value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name: string, props: TCookieProps) {
  if (props.path) setCookie(name, null, { path: props.path, expires: -1 });
  else setCookie(name, null, { expires: -1 });
}
