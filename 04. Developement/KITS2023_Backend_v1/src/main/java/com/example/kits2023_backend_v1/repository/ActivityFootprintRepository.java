package com.example.kits2023_backend_v1.repository;

import com.example.kits2023_backend_v1.model.ActivityFootprint;
import com.example.kits2023_backend_v1.model.ActivityFootprintId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityFootprintRepository extends JpaRepository<ActivityFootprint, ActivityFootprintId> {
}
