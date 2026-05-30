// 二级分类 Category 类型定义
export interface Category {
  children: CategoryChild[];
  id: string;
  name: string;
  picture: null;
}

// 二级分类下属分类数组 CategoryChild 类型定义
export interface CategoryChild {
  brands: null;
  categories: null;
  goods: Good[];
  id: string;
  name: string;
  parentId: null;
  parentName: null;
  picture: string;
  saleProperties: null;
}
