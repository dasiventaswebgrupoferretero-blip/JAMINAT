const d = document;
export default function btnAmburger(btn, menu){
    const $btn = d.querySelector(btn);
    const $menu = d.querySelector(menu);
    $btn.addEventListener("click", () => {
        $btn.classList.toggle("is-active");
        $menu.classList.toggle("active");
        d.body.classList.toggle("menu-activo");
    });
    d.addEventListener("click", (e) => {

        if (e.target.matches(`${menu} a`)) {
            $btn.classList.remove("is-active");
            $menu.classList.remove("active");
            d.body.classList.toggle("menu-activo");
        }
    });
}