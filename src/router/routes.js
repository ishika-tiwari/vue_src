const routes = [
  {
    path: "/ishika",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/about", component: () => import("pages/AboutMe.vue") },
      {
        path: "/about/hobbies",
        component: () => import("pages/MyHobbies.vue"),
      },
      {
        path: "/about/skills",
        component: () => import("pages/TechSkills.vue"),
      },
      { path: "/hobbies/about", component: () => import("pages/AboutMe.vue") },
      { path: "/skills/about", component: () => import("pages/AboutMe.vue") },
      { path: "/hobbies/recs", component: () => import("pages/BookRecs.vue") },
      { path: "/recs/hobbies", component: () => import("pages/MyHobbies.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
