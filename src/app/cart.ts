import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  baseUrl = environment.baseUrl;
  products: IProduct[] = [
    {
      id: 1,
      description:
        'A handbook of agile software craftsmanship — teaches programmers to write clean, readable, and maintainable code through practical principles and examples.',
      name: 'Clean Code',
      imageName: 'programming-clean-code.jpg',
      category: 'Programming',
      price: 39.99,
      discount: 0.1,
    },
    {
      id: 2,
      description:
        'A guide to pragmatic thinking and engineering practices that help developers write better software and grow their careers.',
      name: 'The Pragmatic Programmer',
      imageName: 'programming-pragmatic-programmer.jpg',
      category: 'Programming',
      price: 44.99,
      discount: 0,
    },
    {
      id: 3,
      description:
        'The classic Gang of Four book that catalogues 23 reusable solutions to commonly occurring software design problems.',
      name: 'Design Patterns',
      imageName: 'programming-design-patterns.jpg',
      category: 'Programming',
      price: 49.99,
      discount: 0.15,
    },
    {
      id: 4,
      description:
        'A step-by-step guide to restructuring existing code — improving its internal structure without changing its external behaviour.',
      name: 'Refactoring',
      imageName: 'programming-refactoring.jpg',
      category: 'Programming',
      price: 42.99,
      discount: 0,
    },
    {
      id: 5,
      description:
        'A deep dive into the core mechanisms of JavaScript — covering scope, closures, objects, prototypes, types, and async patterns.',
      name: "You Don't Know JS",
      imageName: 'programming-you-dont-know-js.jpg',
      category: 'Programming',
      price: 34.99,
      discount: 0.2,
    },
    {
      id: 6,
      description:
        'The definitive reference on algorithms and data structures — comprehensive, rigorous, and used in universities worldwide.',
      name: 'Introduction to Algorithms',
      imageName: 'algorithms-clrs.jpg',
      category: 'Algorithms',
      price: 79.99,
      discount: 0,
    },
    {
      id: 7,
      description:
        'A fully illustrated, friendly introduction to algorithms — makes complex computer science concepts accessible to every developer.',
      name: 'Grokking Algorithms',
      imageName: 'algorithms-grokking.jpg',
      category: 'Algorithms',
      price: 35.99,
      discount: 0.1,
    },
    {
      id: 8,
      description:
        'A practical guide to algorithm design and analysis — invaluable for anyone preparing for technical interviews or competitive programming.',
      name: 'The Algorithm Design Manual',
      imageName: 'algorithms-design-manual.jpg',
      category: 'Algorithms',
      price: 54.99,
      discount: 0,
    },
    {
      id: 9,
      description:
        'Covers the full range of data structures and algorithms using Python — ideal for students and working developers alike.',
      name: 'Data Structures & Algorithms in Python',
      imageName: 'algorithms-data-structures-python.jpg',
      category: 'Algorithms',
      price: 59.99,
      discount: 0.05,
    },
    {
      id: 10,
      description:
        'The most widely used guide for software engineering interview preparation — covers data structures, algorithms, and system design problems.',
      name: 'Cracking the Coding Interview',
      imageName: 'algorithms-cracking-coding.jpg',
      category: 'Algorithms',
      price: 36.99,
      discount: 0,
    },
    {
      id: 11,
      description:
        'An in-depth exploration of the principles, practices, and patterns underlying modern distributed data systems at scale.',
      name: 'Designing Data-Intensive Applications',
      imageName: 'system-design-ddia.jpg',
      category: 'System Design',
      price: 54.99,
      discount: 0.2,
    },
    {
      id: 12,
      description:
        'A practical walkthrough of large-scale system design interviews — covers real-world architectures used by top tech companies.',
      name: 'System Design Interview',
      imageName: 'system-design-interview.jpg',
      category: 'System Design',
      price: 29.99,
      discount: 0,
    },
    {
      id: 13,
      description:
        "Robert C. Martin's definitive guide to software architecture — teaches how to separate business logic from frameworks, databases, and UI.",
      name: 'Clean Architecture',
      imageName: 'system-design-clean-architecture.jpg',
      category: 'System Design',
      price: 39.99,
      discount: 0,
    },
    {
      id: 14,
      description:
        'A comprehensive guide to designing and building microservices — covers decomposition, communication, deployment, and organisational patterns.',
      name: 'Building Microservices',
      imageName: 'system-design-microservices.jpg',
      category: 'System Design',
      price: 59.99,
      discount: 0.1,
    },
    {
      id: 15,
      description:
        "Frederick Brooks's timeless classic on software project management — explores why adding manpower to a late project makes it later.",
      name: 'The Mythical Man-Month',
      imageName: 'softeng-mythical-man-month.jpg',
      category: 'Software Engineering',
      price: 32.99,
      discount: 0,
    },
    {
      id: 16,
      description:
        'A comprehensive handbook of software construction — widely regarded as one of the best practical guides to writing high-quality code.',
      name: 'Code Complete',
      imageName: 'softeng-code-complete.jpg',
      category: 'Software Engineering',
      price: 49.99,
      discount: 0.15,
    },
    {
      id: 17,
      description:
        "John Ousterhout's guide to the most important principles of software design — focused on managing complexity in large systems.",
      name: 'A Philosophy of Software Design',
      imageName: 'softeng-philosophy.jpg',
      category: 'Software Engineering',
      price: 24.99,
      discount: 0,
    },
    {
      id: 18,
      description:
        'A practical career guide for software engineers — covers technical skills, working effectively in teams, and navigating career growth.',
      name: "The Software Engineer's Guidebook",
      imageName: 'softeng-guidebook.jpg',
      category: 'Software Engineering',
      price: 34.99,
      discount: 0.1,
    },
  ];

  constructor(private http: HttpClient){

  }

  // getProducts(){
  //   return fetch('http://localhost:3000/api/books')
  // }
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`/api/books`)
  }

  carts: IProduct[] = [];

  add(product: IProduct) {
    this.carts.push(product);
    console.log(this.carts);
  }

  getCartItem(): IProduct[] {
    return this.carts;
  }
}
