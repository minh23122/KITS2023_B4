package com.example.kits2023_backend_v1.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users",
        uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String username;

    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    private String avatar;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(  name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Set<Role> roles = new HashSet<>();

    @Column(columnDefinition = "boolean default true") // Thêm mặc định status là true
    private Boolean status;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "regularactivity",
            joinColumns = @JoinColumn(name = "userId", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "activityId", referencedColumnName = "id")
    )
    private Set<Activity> activities=new HashSet<>();

    public User(String name,String username, String email, String password) {
        this.name=name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    public User(String name,String username,  String password,String email,String avatar,boolean status) {
        this.name=name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatar= avatar;
        this.status=status;
    }
}
