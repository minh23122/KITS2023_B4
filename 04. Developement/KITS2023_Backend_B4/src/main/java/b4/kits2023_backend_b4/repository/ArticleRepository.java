package b4.kits2023_backend_b4.repository;

import b4.kits2023_backend_b4.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Integer> {
}
