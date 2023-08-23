package com.example.kits2023_backend_v1.repository;


import com.example.kits2023_backend_v1.model.Footprint;
import com.example.kits2023_backend_v1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FootprintRepository extends JpaRepository<Footprint, Integer> {
    @Query("select sum (af.volumn*a.emission) " +
            "from Footprint f join ActivityFootprint af on af.id.footprintId=f.id join f.activities a " +
            "where f.id=:footprintId group by f.id ")
    double getTotalEmission(@Param("footprintId") int footprintId);

    @Query("select sum (af.volumn*a.emission) " +
            "from Footprint f join ActivityFootprint af on af.id.footprintId=f.id join f.activities a " +
            "where f.id=:footprintId and a.category.id=:categoryId group by f.id ")
    double getEmissionByCategoryId(@Param("footprintId") int footprintId, @Param("categoryId") int cateogyId);
    @Query("select f from Footprint f order by f.totalEmission limit 3")
    public List<Footprint> getRank3();
}
