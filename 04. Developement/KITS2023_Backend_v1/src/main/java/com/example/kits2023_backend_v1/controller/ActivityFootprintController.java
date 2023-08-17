package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.ActivityFootprint;
import com.example.kits2023_backend_v1.service.ActivityFootprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/af")
public class ActivityFootprintController{
    @Autowired
    private ActivityFootprintService activityFootprintService;
    @PostMapping
    public ActivityFootprint insertActivityFootprint(@RequestBody ActivityFootprint activityFootprint){
        return activityFootprintService.insertActivityFootprint(activityFootprint);
    }
}
