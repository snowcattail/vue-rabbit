import http from "@/utils/http";
import type { ClassData } from "./models/layoutModel";

export function getCategoryAPI(): Result<ClassData[]> {
  return http({
    url: "home/category/head",
  });
}
