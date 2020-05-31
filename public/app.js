$(document).ready(() => {
  $('.devour-btn').click((e) => {
    const burgerId = e.target.dataset.burgerId
    $.ajax({
      url: '/api/burgers/' + burgerId,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ devoured: 1 })
    })
    location.reload()
  });
  $('#enter-form').on('submit', (e) => {
    e.preventDefault();
    const burger = {
      name: $('#name').val()
    }
    $.ajax('api/burgers', {
      method: "POST",
      data: burger
    }).then(data => {
      console.log(`succefully added ` + data)
    })
    location.reload()
  });

  $('.delete-btn').click(e => {
    const burgerId = e.target.dataset.burgerId
    $.ajax({
      url: '/api/burgers/' + burgerId,
      method: 'DELETE'
    })
    location.reload()
  })
  $('[data-toggle="tooltip"]').tooltip()
})