/*NODES ELEMENT */
const btnAddPet = document.querySelector('.btn_add_pet')
const selectThemeModal = document.querySelector('.select_theme_modal')
const closeSelectThemeModal = document.querySelector('#close_icon')
const brandCardContainer = document.querySelector('.brand_card_container')
const brandSwitcher = document.querySelector('#switcher-id')
let currentBrand = null

/*METHODS(CALLBACKS)*/

const selectThemeColor = () => {
  selectThemeModal.classList.add('open_select_theme_modal')
}

const closeModal = () => {
  selectThemeModal.classList.remove('open_select_theme_modal')
}

const setTheme = () => {
  if (currentBrand === 'orange') {
    brandSwitcher.href = ''
  }
  if (currentBrand === 'purple') {
    brandSwitcher.href = './styles/purple_theme.css'
    return
  }

  if (currentBrand === 'yellow') {
    brandSwitcher.href = './styles/yellow_theme.css'
    return
  }
}
const selectTheme = e => {
  if (e.target.classList.contains('brand_card')) {
    currentBrand = e.target.dataset.theme
    selectThemeModal.classList.remove('open_select_theme_modal')
    setTheme()
  }
}

/* EVENTS */

btnAddPet.addEventListener('click', selectThemeColor)
closeSelectThemeModal.addEventListener('click', closeModal)

selectThemeModal.addEventListener('click', e => {
  if (e.target.classList.contains('select_theme_modal')) {
    selectThemeModal.classList.remove('open_select_theme_modal')
  }
})

brandCardContainer.addEventListener('click', selectTheme)
