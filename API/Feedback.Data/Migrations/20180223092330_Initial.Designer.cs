﻿// <auto-generated />
using Feedback.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Feedback.Data.Migrations
{
    [DbContext(typeof(FeedbackContext))]
    [Migration("20180223092330_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Feedback.Entity.Models.FeedBack", b =>
                {
                    b.Property<int>("FeedbackId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<string>("FeedbackDescription")
                        .HasMaxLength(500);

                    b.Property<string>("FeedbackTitle")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.HasKey("FeedbackId");

                    b.ToTable("Feedbacks");
                });

            modelBuilder.Entity("Feedback.Entity.Models.FeedbackQuestion", b =>
                {
                    b.Property<int>("FeedbackQuestionId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<int>("FeedbackId");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<int>("QuestionId");

                    b.HasKey("FeedbackQuestionId");

                    b.HasIndex("FeedbackId");

                    b.HasIndex("QuestionId");

                    b.ToTable("FeedbackQuestions");
                });

            modelBuilder.Entity("Feedback.Entity.Models.Question", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsCommentField");

                    b.Property<bool>("IsDeleted");

                    b.Property<bool>("IsRateField");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("QuestionText")
                        .IsRequired()
                        .HasMaxLength(1000);

                    b.HasKey("QuestionId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("Feedback.Entity.Models.TrainingDetail", b =>
                {
                    b.Property<int>("TrainingDetailId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("TraineeDept")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("TraineeEmpId")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("TraineeName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("TrainerName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("TrainingTopic")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("TrainingDetailId");

                    b.ToTable("TrainingDetails");
                });

            modelBuilder.Entity("Feedback.Entity.Models.TrainingResponse", b =>
                {
                    b.Property<int>("TrainingResponseId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comments")
                        .HasMaxLength(500);

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<int>("FeedbackQuestionId");

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsDeleted");

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<decimal>("Rating");

                    b.Property<int>("TrainingDetailId");

                    b.HasKey("TrainingResponseId");

                    b.HasIndex("TrainingDetailId");

                    b.ToTable("TrainingResponses");
                });

            modelBuilder.Entity("Feedback.Entity.Models.Users", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int?>("DeletedBy");

                    b.Property<DateTime?>("DeletedDate");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<bool>("IsActive");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("LastName")
                        .HasMaxLength(50);

                    b.Property<int?>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Feedback.Entity.Models.FeedbackQuestion", b =>
                {
                    b.HasOne("Feedback.Entity.Models.FeedBack")
                        .WithMany("FeedbackQuestions")
                        .HasForeignKey("FeedbackId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Feedback.Entity.Models.Question", "Question")
                        .WithMany()
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Feedback.Entity.Models.TrainingResponse", b =>
                {
                    b.HasOne("Feedback.Entity.Models.TrainingDetail")
                        .WithMany("TrainingResponses")
                        .HasForeignKey("TrainingDetailId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
