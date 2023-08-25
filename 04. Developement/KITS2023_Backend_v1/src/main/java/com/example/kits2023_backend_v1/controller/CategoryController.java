package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Category;
import com.example.kits2023_backend_v1.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/category")

public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;
    @GetMapping("/all")
    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

    @GetMapping("/count")
    public long countAllCategories(){
        return categoryRepository.count();
    }
}
