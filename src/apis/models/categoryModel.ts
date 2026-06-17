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

// 三级分类 Brands 类型定义
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

// 三级分类 Categories 类型定义
export interface Categories {
  id: string;
  layer: number;
  name: string;
  parent: null;
}

// 三级分类 SaleProperties 类型定义
export interface SaleProperties {
  id: string;
  name: string;
  properties: Properties[];
}

// 四级分类 Properties 类型定义
export interface Properties {
  id: string;
  name: string;
}

// 导航数据 NavigationDataRequest 类型定义
export interface NavigationDataRequest {
  categoryId: string;
  page: number;
  pageSize: number;
  sortField: string;
}

// 获取二级分类下导航商品数据
export interface NavigationGoodList {
  count: number;
  items: Good[];
  page: number;
  pageSize: number;
  pages: number;
}
