
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headDiv = document.createElement('div')
  const spanDate = document.createElement('span')
  const h1Title = document.createElement('h1')
  const spanTemp = document.createElement('span')

  spanDate.textContent = `${date}`
  h1Title.textContent = `${title}`
  spanTemp.textContent = `${temp}`

  headDiv.appendChild(spanDate)
  headDiv.appendChild(h1Title)
  headDiv.appendChild(spanTemp)

  headDiv.classList.add('header')
  spanDate.classList.add('date')
  spanTemp.classList.add('temp')
  
    return headDiv;
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headContainer = document.querySelector('.header-container')

const headAppend = document.createElement('header')
headAppend.appendChild(Header)
headContainer.appendChild(headAppend)

return headContainer;

}

export { Header, headerAppender }
