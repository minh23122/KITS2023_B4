package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Article;
import com.example.kits2023_backend_v1.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")

public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;
    @PutMapping("/{id}")
    public Article approveArticle(@PathVariable int id){
        Optional<Article> a=articleRepository.findById(id);
        if(a.isPresent()){
            Article article=a.get();
            article.setStatus(true);
            return articleRepository.save(article);
        }
        return null;
    }
}
