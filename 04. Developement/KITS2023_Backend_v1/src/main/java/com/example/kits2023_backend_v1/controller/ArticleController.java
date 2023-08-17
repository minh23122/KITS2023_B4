package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Article;
import com.example.kits2023_backend_v1.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

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
