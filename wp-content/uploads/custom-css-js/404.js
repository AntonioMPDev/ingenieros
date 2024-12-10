<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
const pages = [
	"page-id-378",
	"page-id-468",
	"page-id-581",
	"single"
]

pages.forEach((page) => {
	if (document.body.classList.contains(page)) {
		const logoImageParent = document.querySelector(".custom-logo-link")
		const logoHtml = logoImageParent.innerHTML
		const logo = document.querySelector(".custom-logo")
		logo.src = logo.src.replace(/LOGO-HUB-Ingenieros_color-negativo-fondo-negro-1-e1733598761546/g, "LOGO-HUB-Ingenieros_color-positivo-fondo-blanco-1-e1733860237474");
		logo.setAttribute("srcset", "");
		// Replace everywhere fondo-negro for fondo-negro-1 in the html
		// const imgHtml = `<img width="214" height="64" src="http://localhost:8088/wp-content/uploads/2024/12/LOGO-HUB-Ingenieros_color-positivo-fondo-blanco-1-e1733860237474.png" class="custom-logo" alt="The Hub Office" decoding="async">`
		// const replaced = logoHtml.replace(/LOGO-HUB-Ingenieros_color-negativo-fondo-negro-1-e1733598761546/g, "LOGO-HUB-Ingenieros_color-positivo-fondo-blanco-1-e1733860237474")
		// logoImageParent.innerHTML = replaced

		const menuIcon = document.querySelector("#menu-button")
		const menuIconInnerHtml = menuIcon.innerHTML
		menuIcon.innerHTML = menuIconInnerHtml.replace("menuburger", "menuburgerblack")
	}
})</script>
<!-- end Simple Custom CSS and JS -->
