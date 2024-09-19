const g = document.getElementById.bind(document)

document.addEventListener('DOMContentLoaded', function () {
  const now = dayjs()
  g('greet').textContent = `Happy ${now.format('dddd')}`
  g('today').textContent = now.format('D MMM YYYY')
})

/* primary action */

g('get-started').addEventListener('click', e => {
  window.scrollTo({
    behavior: 'smooth',
    top: g('payment').getBoundingClientRect().top + window.scrollY,
  })
})

/* accept payment */

g('buy').addEventListener('click', e => {
  window.location.href = 'https://buy.stripe.com/test_fZeeVS4jF2Tl1pe4gg'
})

g('subscribe').addEventListener('click', e => {
  window.location.href = 'https://buy.stripe.com/test_7sIcNK7vR8dFaZOfYZ'
})

/* tracking */

/* ;((c, l, a, r, i, t, y) => {
  c[a] =
    c[a] ||
    function () {
      ;(c[a].q = c[a].q || []).push(arguments)
    }
  t = l.createElement(r)
  t.async = 1
  t.src = 'https://www.clarity.ms/tag/' + i
  y = l.getElementsByTagName(r)[0]
  y.parentNode.insertBefore(t, y)
})(window, document, 'clarity', 'script', 'xxxxxxx') */

document.addEventListener('DOMContentLoaded', e => {
  fetch('samples.json')
    .then(response => response.json())
    .then(videos => {
      videos.forEach((video, i) => {
        const button = document.createElement('button')
        if (!i) button.classList.add('selected')
        button.textContent = video.tag
        button.addEventListener('click', e => {
          document.querySelectorAll('#tags button').forEach(b => b.classList.remove('selected'))
          e.target.closest('button').classList.add('selected')
          g('sample').src = video.url
          g('sample').parentElement.load()
        })
        g('tags').appendChild(button)
      })
    })
    .catch(console.error)
})
