export default function Services() {
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl lg:text-8xl font-bold font-mont tracking-tighter text-slate-800 m-auto my-8">
        Services
      </h1>
      <section className="grid grid-cols-3 gap-12 items-center p-24 font-mont">
        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            fact_check
          </span>
          <span className="font-semibold uppercase text-2xl">
            Compliance assessments
          </span>
          <span className="font-light">
            Identify your company's compliance status by conducting assessments
            to evaluate your adherence to industry-specific regulations such as
            PCI, HIPAA, HITRUST, SOC, and ISO 27002.
          </span>
        </div>
        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            build_circle
          </span>
          <span className="font-semibold uppercase text-2xl">
            Gap analysis & remediation
          </span>
          <span className="font-light">
            Identify gaps in your information security management programs and
            provide guidance on how to remediate these gaps in a timely and
            cost-effective manner.
          </span>
        </div>
        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            rule
          </span>
          <span className="font-semibold uppercase text-2xl">
            Policy & Procedure Development
          </span>
          <span className="font-light">
            Policy and procedure development: Develop policies and procedures
            that align with industry best practices and regulatory requirements
            to help the organization stay compliant.
          </span>
        </div>
        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            gpp_maybe
          </span>
          <span className="font-semibold uppercase text-2xl">
            Technical vulnerability scanning and penetration testing
          </span>
          <span className="font-light">
            Technical vulnerability scanning and penetration testing services to
            identify exploitable security weaknesses that could result in
            unauthorized access to system components and sensitive data.
          </span>
        </div>

        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            settings_backup_restore
          </span>
          <span className="font-semibold uppercase text-2xl">
            Business continuity planning & disaster recovery
          </span>
          <span className="font-light">
            Assist with the development and implement business continuity and
            disaster recovery plans to ensure that your organization can
            continue to operate in the event of a disruption or disaster.
          </span>
        </div>
        <div className="flex flex-col items-center text-center border gap-2 p-8">
          <span className="material-symbols-outlined material-icons md-96 text-teal-600">
            query_stats
          </span>
          <span className="font-semibold uppercase text-2xl">
            GRC program management
          </span>
          <span className="font-light">
            Provide overall management and oversight of your GRC program,
            including setting priorities, defining goals and objectives,
            establishing metrics for measuring success, and reporting on
            progress to senior management.
          </span>
        </div>
      </section>
    </div>
  );
}
