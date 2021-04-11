function getEmailDomain(email) {
  return email.substring(email.lastIndexOf('@') + 1, email.length);
}

module.exports = getEmailDomain;
