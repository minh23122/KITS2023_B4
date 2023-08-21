package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.repository.FootprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/footprint")
public class FootprintController {
    @Autowired
    private FootprintRepository footprintRepository;
}
