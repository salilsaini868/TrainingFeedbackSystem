﻿namespace Feedback.Common.CommonData
{
    public static class Constants
    {
        /// <summary>
        /// Added By Column
        /// </summary>
        public const string CreatedBy = "CreatedBy";

        /// <summary>
        /// Added Date Column
        /// </summary>
        public const string CreatedDate = "CreatedDate";

        /// <summary>
        /// The modified by column
        /// </summary>
        public static string ModifiedBy = "ModifiedBy";

        /// <summary>
        /// The modified date column
        /// </summary>
        public static string ModifiedDate = "ModifiedDate";
        
        /// <summary>
        /// Is Deleted Column
        /// </summary>
        public const string IsDeletedColumn = "IsDeleted";

        /// <summary>
        /// Is Active Column
        /// </summary>
        public const string IsActiveColumn = "IsActive";
      
    }

    public static class SkillStatusNotification
    {
        public const string SkillCreated = "Skill Created";
        public const string SkillUpdated = "Skill Updated";
        public const string SkillDeleted = "Skill Deleted";
        public const string DuplicateSkill = "Skill with the same name Already Exists!.";

    }

    public static class QualificationStatusNotification
    {
        public const string QualificationCreated = "Qualification Created";
        public const string QualificationUpdated = "Qualification Updated";
        public const string QualificationDeleted = "Qualification Deleted";
        public const string DuplicateQualification = "Qualification with the same name Already Exists!.";

    }

    public static class CommonErrorMessages
    {
        public const string UnknownError = "Sorry, we have encountered an error.";
        public const string BadRequest = "Invalid Request";
    }
}
