package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Activity;
import com.example.kits2023_backend_v1.model.Footprint;
import com.example.kits2023_backend_v1.repository.FootprintRepository;
import com.example.kits2023_backend_v1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/footprint")
public class FootprintController {
    @Autowired
    private FootprintRepository footprintRepository;
    @Autowired
    private UserRepository userRepository;
    @PutMapping("/updateEmission/{id}")
    public ResponseEntity<?> updateEmission(@PathVariable int id){
        Optional<Footprint> updateOptionalFootprint=footprintRepository.findById(id);
        if(updateOptionalFootprint.isPresent()){
            double totalEUpdate=footprintRepository.getTotalEmission(id);
            Footprint updateFootprint=updateOptionalFootprint.get();
            updateFootprint.setTotalEmission(totalEUpdate);
            return ResponseEntity.ok().body(updateFootprint);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("khong tim thay footprint");
    }
    @PostMapping("/createByUser/{userId}")
    public Footprint createFootprint(@PathVariable int userId){
        Date currentDate=Date.valueOf(LocalDate.now());
        Footprint fp=new Footprint();
        fp.setDate(currentDate);
        fp.setUser(userRepository.findById(userId).get());
        return footprintRepository.save(fp);
    }
    @GetMapping("/percentCategory/{footprintId}/{categoryId}")
    public double getPercentOfCategory(@PathVariable int footprintId, @PathVariable int categoryId){
        double totalThisCategory= footprintRepository.getEmissionByCategoryId(footprintId, categoryId);
        double totalEmission=footprintRepository.getTotalEmission(footprintId);
        return totalThisCategory;
    }
    @GetMapping("/rank3")
    public List<Footprint> rank3Fp(){
        return footprintRepository.getRank3();
    }
}
