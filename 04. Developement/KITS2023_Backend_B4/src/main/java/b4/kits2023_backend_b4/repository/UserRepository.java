package b4.kits2023_backend_b4.repository;

import b4.kits2023_backend_b4.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
