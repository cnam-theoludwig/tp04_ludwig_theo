import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { delay, map, Observable } from "rxjs"
import { Product } from "../models/product"
import { environment } from "../environments/environment"
import { Category } from "../models/category"

interface GetProductsInput {
  search?: string
  categoryId?: number
}

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public getProducts(input: GetProductsInput = {}): Observable<Product[]> {
    const { search = "", categoryId } = input
    return this.http.get<Product[]>(environment.apiURLProducts).pipe(
      delay(800),
      map((products) => {
        return products.filter((product) => {
          const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase())
          const matchesCategory =
            categoryId == null || product.categoryId === categoryId
          return matchesSearch && matchesCategory
        })
      }),
    )
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.apiURLCategories)
  }
}
