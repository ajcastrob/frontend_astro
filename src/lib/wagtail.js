const url_base = import.meta.env.PUBLIC_WAGTAIL_API;

export const getBlogPost = async () => {
  try {
    const res = await fetch(
      `${url_base}/pages/?type=skills_blog.ArticlePage&fields=*`,
    );

    if (!res.ok) {
      throw new Error(`Error en la petición: ${res.status}`);
    }

    const json = await res.json();
    return json.items;
  } catch (error) {
    console.error("Error al traer posts de Wagtail", error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug) => {
  const posts = await getBlogPost();
  return posts.find((item) => item.meta.slug === slug) ?? null;

