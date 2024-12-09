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

		// Replace everywhere fondo-negro for fondo-negro-1 in the html
		const replaced = logoHtml.replace(/LOGO-HUB-Arquitectos_color-negativo-fondo-negro/g, "LOGO-HUB-Arquitectos_color-positivo-fondo-blanco-1-e1733431307182")
		logoImageParent.innerHTML = replaced

		const menuIcon = document.querySelector("#menu-button")
		const menuIconInnerHtml = menuIcon.innerHTML
		menuIcon.innerHTML = menuIconInnerHtml.replace("menuburger", "menuburgerblack")
	}
})</script>
<!-- end Simple Custom CSS and JS -->
