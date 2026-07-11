package com.example.data;


public record ProjectRuntimeData(
    int projectId,
    Object planedTime, 
    Object planedTimeMin, 
    Object planedTimeMax, 
    Object realtime,
    Object realtimeMin,
    Object realtimeMax
) {
    
}
