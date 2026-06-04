// 二级分类 Category 类型定义
export interface Category {
  children: CategoryChild[];
  id: string;
  name: string;
  picture: null;
}

// 二级分类下属分类数组 CategoryChild 类型定义
export interface CategoryChild {
  brands: Brands[];
  categories: Categories[];
  goods: Good[];
  id: string;
  name: string;
  parentId: string;
  parentName: string;
  picture: string;
  saleProperties: SaleProperties[];
}

// Brands 类型定义
export interface Brands {
  desc: string;
  id: string;
  logo: string;
  name: string;
  nameEn: string;
  picture: string;
  place: string;
  type: null;
}

// Categories 类型定义
export interface Categories {
  id: string;
  layer: number;
  name: string;
  parent: null;
}

// SaleProperties 类型定义
export interface SaleProperties {
  id: string;
  name: string;
  properties: Properties[];
}

// Properties 类型定义
export interface Properties {
  id: string;
  name: string;
}
