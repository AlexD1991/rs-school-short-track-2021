function removeKFromList(l, k) {
  let copy = { ...l };
  let cur = copy;

  if (copy.value === k) {
    copy = copy.next;
  }

  while (cur.next) {
    if (cur.next.value === k) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return copy;
}

module.exports = removeKFromList;
