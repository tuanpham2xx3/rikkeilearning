import type { Category } from "./types";

export function addCategory(
  categories: Category[],
  name: string,
  limit: number,
): Category[] {
  if (name.trim() === "") {
    throw new Error("Ten danh muc khong duoc de trong");
  }

  if (limit < 0) {
    throw new Error("Gioi han khong duoc nho hon 0");
  }

  const newCategory: Category = {
    id: `cat_${Date.now()}`,
    name: name.trim(),
    limit,
  };

  return [...categories, newCategory];
}

export function updateCategory(
  categories: Category[],
  categoryId: string,
  data: {
    name?: string;
    limit?: number;
  },
): Category[] {
  if (data.name !== undefined && data.name.trim() === "") {
    throw new Error("Ten danh muc khong duoc de trong");
  }

  if (data.limit !== undefined && data.limit < 0) {
    throw new Error("Gioi han khong duoc nho hon 0");
  }

  return categories.map((cat) => {
    if (cat.id !== categoryId) {
      return cat;
    }

    return {
      ...cat,
      name: data.name !== undefined ? data.name.trim() : cat.name,
      limit: data.limit !== undefined ? data.limit : cat.limit,
    };
  });
}

export function deleteCategory(
  categories: Category[],
  categoryId: string,
): Category[] {
  return categories.filter((cat) => cat.id !== categoryId);
}
