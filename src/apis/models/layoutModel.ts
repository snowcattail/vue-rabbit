// 导航数据 classData 类型定义
export interface ClassData {
  id: string;
  name: string;
  picture: string;
  children: ClassData[];
  goods: Good[];
}
