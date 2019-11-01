$(document).ready(() => {
  $('#root').prepend(document.importNode(
    $('#not-a11y').prop('content'),
    true)
  );
});
