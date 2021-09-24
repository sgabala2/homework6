package model;

import java.util.Date;
import java.util.Objects;

// TODO 3: Similar to what was done in Employer class, annotate Job class using
//  ORMLite annotations so that you can easily create the "jobs" table in Main.java
//  using ORMLite's TableUtil class.
public class Job {

    private String title;
    private Date datePosted;
    private Date deadline;
    private String domain;
    private String location;
    private boolean fullTime;
    private boolean salaryBased;
    private String requirements;
    private int payAmount;
    private int employerId;

    public Job() {
    }
    public Job(String title, Date datePosted, Date deadline, String domain, String location, boolean fullTime, boolean salaryBased, String requirements, int payAmount, int employerId) {
        this.title = title;
        this.datePosted = datePosted;
        this.deadline = deadline;
        this.domain = domain;
        this.location = location;
        this.fullTime = fullTime;
        this.salaryBased = salaryBased;
        this.requirements = requirements;
        this.payAmount = payAmount;
        this.employerId = employerId;
    }

    public String getTitle() {
        return title;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public Date getDeadline() {
        return deadline;
    }

    public String getDomain() {
        return domain;
    }

    public String getLocation() {
        return location;
    }

    public boolean isFullTime() {
        return fullTime;
    }

    public boolean isSalaryBased() {
        return salaryBased;
    }

    public String getRequirements() {
        return requirements;
    }

    public int getPayAmount() {
        return payAmount;
    }

    public int getEmployerId() {
        return employerId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Job job = (Job) o;
        return fullTime == job.fullTime && salaryBased == job.salaryBased && payAmount == job.payAmount && employerId == job.employerId && title.equals(job.title) && Objects.equals(datePosted, job.datePosted) && Objects.equals(deadline, job.deadline) && Objects.equals(domain, job.domain) && Objects.equals(location, job.location) && Objects.equals(requirements, job.requirements);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, datePosted, deadline, domain, location, fullTime, salaryBased, requirements, payAmount, employerId);
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setFullTime(boolean fullTime) {
        this.fullTime = fullTime;
    }

    public void setSalaryBased(boolean salaryBased) {
        this.salaryBased = salaryBased;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public void setPayAmount(int payAmount) {
        this.payAmount = payAmount;
    }

    public void setEmployerId(int employerId) {
        this.employerId = employerId;
    }
}
