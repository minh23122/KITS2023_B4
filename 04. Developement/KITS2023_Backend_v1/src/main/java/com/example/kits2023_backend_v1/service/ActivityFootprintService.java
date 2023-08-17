package com.example.kits2023_backend_v1.service;

import com.example.kits2023_backend_v1.model.ActivityFootprint;
import com.example.kits2023_backend_v1.model.ActivityFootprintId;
import com.example.kits2023_backend_v1.repository.ActivityFootprintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityFootprintService {
    @Autowired
    private ActivityFootprintRepository activityFootprintRepository;
    public ActivityFootprint insertActivityFootprint(ActivityFootprint activityFootprint){
//        ActivityFootprint activityFootprint=new ActivityFootprint();
//        ActivityFootprintId id=new ActivityFootprintId();
//        id.setActivityId(activityId);
//        id.setFootprintId(footprintId);
//        activityFootprint.setId(id);
//        activityFootprint.setVolumn(volumn);
        return activityFootprintRepository.save(activityFootprint);
    }
}
