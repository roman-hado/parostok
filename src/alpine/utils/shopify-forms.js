import { $ } from "@/alpine/utils/jquery";

export function reset(email) {
  const data = {
    email: email,
    form_type: "recover_customer_password",
    utf8: "✓",
  };

  const promise = $.ajax({
    url: "/account/recover",
    method: "post",
    data: data,
    dataType: "html",
    async: true,
  });

  console.log(promise);

  return promise;
}

export function login(email, password) {
  const data = {
    "customer[email]": email,
    "customer[password]": password,
    form_type: "customer_login",
    utf8: "✓",
  };

  const promise = $.ajax({
    url: "/account/login",
    method: "post",
    data: data,
    dataType: "html",
    async: true,
  });

  return promise;
}

/*
 * Log the customer in with their email and password.
 */
export function register(email, password) {
  const data = {
    "customer[email]": email,
    "customer[password]": password,
    form_type: "create_customer",
    utf8: "✓",
  };

  const promise = $.ajax({
    url: "/account",
    method: "post",
    data: data,
    dataType: "html",
    async: true,
  });

  return promise;
}

export function contact(topic, name, email, message) {
  const data = {
    "contact[name]": name,
    "contact[email]": email,
    "contact[topic]": topic,
    "contact[body]": message,
    form_type: "contact",
    utf8: "✓",
  };

  const promise = $.ajax({
    url: "/contact",
    method: "post",
    data: data,
    dataType: "html",
    async: true,
  });

  console.log(promise, data);

  return promise;
}
