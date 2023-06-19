import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import AutorView from "../views/AutorView.vue";
import EditoraView from "../views/EditoraView.vue";
import LivroView from "../views/LivroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/autores",
      nome: "autores",
      component: AutorView,
    },
    {
      path: "/editoras",
      nome: "editoras",
      component: EditoraView,
    },
    {
      path: "/livros",
      nome: "livros",
      component: LivroView,
    },
  ],
});

export default router;
