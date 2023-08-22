package com.example.kits2023_backend_v1.repository;


import com.example.kits2023_backend_v1.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Integer> {
    Optional<Article> findArticleById(int id);
Optional<Article> findArticleByName(String name);
}
